package com.example.myapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.myapp.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}