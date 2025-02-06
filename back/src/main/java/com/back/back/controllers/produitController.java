package com.back.back.controllers;

import com.back.back.Entity.produit;
import com.back.back.services.produitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/produits")
public class produitController {

    @Autowired
    private produitService produitService;

    // جلب جميع المنتجات
    @GetMapping
    public List<produit> getAllProduits() {
        return produitService.getAllProduits();
    }

    // جلب منتج معين بواسطة ID
    @GetMapping("/{id}")
    public Optional<produit> getProduitById(@PathVariable Long id) {
        return produitService.getProduitById(id);
    }

    // إضافة منتج جديد
    @PostMapping
    public produit addProduit(@RequestBody produit p) {
        return produitService.addProduit(p);
    }

    // تعديل منتج معين
    @PutMapping("/{id}")
    public produit updateProduit(@PathVariable Long id, @RequestBody produit p) {
        return produitService.updateProduit(id, p);
    }

    // حذف منتج معين
    @DeleteMapping("/{id}")
    public void deleteProduit(@PathVariable Long id) {
        produitService.deleteProduit(id);
    }

}
