package com.devjunky.lookaround.controller;

import com.devjunky.lookaround.dao.DaoHelper;
import com.devjunky.lookaround.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Created by avipokhrel on 2/15/15.
 */
@Controller
@RequestMapping(value = "/rest/products")
public class ProductController {
    @Autowired
    private DaoHelper daoHelper;


    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseBody
    public Collection<Product> getAllProducts() {
        return daoHelper.listProduct();
    }

    @RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Product retrieveProduct(@PathVariable("id") String id) {
        return daoHelper.getProductById(id);
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void listItem(@RequestBody Product product) {
        daoHelper.addProduct(product);
    }

    @RequestMapping(value = "/remove/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void removeProduct(@PathVariable("id") String id) {
        daoHelper.deleteProductById(id);
    }

}
