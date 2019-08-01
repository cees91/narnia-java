package com.example.narnia.narnia.repositories;

import com.example.narnia.narnia.models.Tourist;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TouristRepository extends CrudRepository<Tourist, Long> {
    List<Tourist> findAll();
}
