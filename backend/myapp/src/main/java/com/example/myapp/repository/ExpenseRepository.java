package com.example.myapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.myapp.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
