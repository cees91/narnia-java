package com.example.narnia.narnia.services;


import com.example.narnia.narnia.models.Tourist;
import com.example.narnia.narnia.repositories.TouristRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TouristService {
    @Autowired
    private TouristRepository repo;

    public String checkStatus(){
        int currentOccupation = repo.findAll().size();
        return "There are currently " + (5-currentOccupation) + " spots left in Narnia!";
    }
    public List<Tourist> findAllInNarnia(){
        List<Tourist> tourists = repo.findAll();
        return tourists.stream().filter(tourist -> tourist.isInNarnia() == true).collect(Collectors.toList());

    }
    public List<Tourist> findAllNotInNarnia(){
        List<Tourist> tourists = repo.findAll();
        return tourists.stream().filter(tourist -> tourist.isInNarnia() == false).collect(Collectors.toList());

    }
}
