package com.devjunky.lookaround.repository;

import com.devjunky.lookaround.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by avipokhrel on 2/16/15.
 */
public interface ProductRepository extends MongoRepository<Product, String> {
}
