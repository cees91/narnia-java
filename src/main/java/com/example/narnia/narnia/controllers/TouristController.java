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

    @GetMapping(params="status")
    public @ResponseBody String getWorldStatus(){
        return service.checkStatus();
    }
    @GetMapping("/inside")
    public List<Tourist> getTouristsInNarnia(){
        return service.findAllInNarnia();
    }
    @GetMapping("/registered")
    public List<Tourist> getRegisteredTourists(){
        return service.findAllNotInNarnia();
    }
    @PostMapping("/add")
    public Tourist addTourist(@RequestBody Tourist tourist)  throws RuntimeException{
        if(service.findAllInNarnia().size() < 5) {
                tourist.setInNarnia(true);
                return repo.save(tourist);
        } else {
            throw new WorldIsFullException("World is currently full, please come back later!");
        }
    }
    @PostMapping("/register")
    public Tourist registerTourist(@RequestBody Tourist tourist)  throws RuntimeException{
        return repo.save(tourist);
    }

    @DeleteMapping("/{touristID}")
    public ResponseEntity<?> deletePost(@PathVariable Long touristID) {
        return repo.findById(touristID).map(tourist -> {
            tourist.setInNarnia(false);
            repo.save(tourist);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new com.example.jpa.exception.ResourceNotFoundException("PostId " + touristID + " not found"));
    }
}
