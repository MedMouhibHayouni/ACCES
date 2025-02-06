package com.back.back.services;


import com.back.back.Entity.produit;
import com.back.back.repositories.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class produitService {

    @Autowired
    private ProduitRepository produitRepository;

    public List<produit> getAllProduits() {
        return produitRepository.findAll();
    }

    public Optional<produit> getProduitById(Long id) {
        return produitRepository.findById(id);
    }

    public produit addProduit(produit p) {
        return produitRepository.save(p);
    }

    public produit updateProduit(Long id, produit p) {
        Optional<produit> existingProduit = produitRepository.findById(id);
        if (existingProduit.isPresent()) {
            p.setId(id);
            return produitRepository.save(p);
        } else {
            throw new RuntimeException("Produit non trouvé");
        }
    }

    public void deleteProduit(Long id) {
        produitRepository.deleteById(id);
    }
}