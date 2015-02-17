package com.devjunky.lookaround.dao;

import com.devjunky.lookaround.model.Product;
import com.devjunky.lookaround.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * Created by avipokhrel on 2/16/15.
 */
@Service
public class DaoHelper {
    @Autowired
    private MongoTemplate mongoTemplate;
    @Autowired
    private ProductRepository productRepository;


    public List<Product> listProduct() {
        return productRepository.findAll();
    }

    public Product getProductById(String id) {
        return productRepository.findOne(id);
    }

    public Product addProduct(Product product) {
        if (!mongoTemplate.collectionExists(Product.class)) {
            mongoTemplate.createCollection(Product.class);
        }
        product.setId(UUID.randomUUID().toString());
        product.setDate(new Date());
        return productRepository.save(product);
    }

    public void deleteProductById(String id) {
        productRepository.delete(id);
    }
}
