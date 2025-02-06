package com.back.back.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "produits")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String category;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(nullable = false)
    private double prix;

    private Double old_price;

    @Column(nullable = false)
    private String brand;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    private String img_hover;

    @Column(nullable = false)
    private String budget;

    @Column(nullable = false)
    private String origine;

}
