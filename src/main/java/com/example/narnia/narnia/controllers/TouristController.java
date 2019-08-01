package com.example.narnia.narnia.controllers;


import com.example.narnia.narnia.exceptions.WorldIsFullException;
import com.example.narnia.narnia.models.Tourist;
import com.example.narnia.narnia.repositories.TouristRepository;
import com.example.narnia.narnia.services.TouristService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/tourists")

public class TouristController {
    @Autowired
    private TouristRepository repo;

    @Autowired
    private TouristService service;

    /**
     * Returns a list of tourists that are currently in narnia!
     * @return
     */
    @GetMapping("/inside")
    public List<Tourist> getTouristsInNarnia(){
        return service.findAllInNarnia();
    }

    /**
     * Returns a list of tourists who have registered, but are not in narnia
     * @return
     */
    @GetMapping("/registered")
    public List<Tourist> getRegisteredTourists(){
        return service.findAllNotInNarnia();
    }

    /**
     *  Lets a tourist go to Narnia, as long as Narnia isn't full (5 people max)
     * @param tourist Expects a tourist object
     * @throws RuntimeException will throw an error if the world is full.
     */
    @PostMapping("/add")
    public void addTourist(@RequestBody Tourist tourist)  throws RuntimeException{
        if(service.findAllInNarnia().size() < 5) {
                tourist.setInNarnia(true);
                repo.save(tourist);
        } else {
            throw new WorldIsFullException("World is currently full, please come back later!");
        }
    }

    /**
     * Allows tourists to register for Narnia
     * @param tourist Tourist object with first name, last name, age and city
     */
    @PostMapping("/register")
    public void registerTourist(@RequestBody Tourist tourist) {
         repo.save(tourist);
    }

    /**
     * Removes the user from Narnia by setting the boolean property to false
     * @param touristID ID of the tourist that has to leave narnia.
     * @return a http response if everything went ok
     */
    @PatchMapping("/{touristID}")
    public ResponseEntity<?> leaveNarnia(@PathVariable Long touristID) {
        return repo.findById(touristID).map(tourist -> {
            tourist.setInNarnia(false);
            repo.save(tourist);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new com.example.jpa.exception.ResourceNotFoundException("PostId " + touristID + " not found"));
    }
}
