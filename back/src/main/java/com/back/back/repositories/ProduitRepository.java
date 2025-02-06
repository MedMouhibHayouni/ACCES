package com.back.back.repositories;

import com.back.back.Entity.produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface ProduitRepository extends JpaRepository <produit, Long>{
}
