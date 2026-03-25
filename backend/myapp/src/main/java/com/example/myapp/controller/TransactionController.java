package com.example.myapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.entity.Transaction;
import com.example.myapp.repository.TransactionRepository;
import com.example.myapp.service.FraudDetectionService;

@RestController
@RequestMapping("/transactions")
@CrossOrigin(origins = "*")
public class TransactionController {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private FraudDetectionService fraudDetectionService;

    @PostMapping
    public Transaction createTransaction(@RequestBody Transaction t) {
        // Call fraud detection
        var result = fraudDetectionService.checkFraud(t.getAmount(), t.getCategory(), t.getDeviceType(), t.getTransactionTime());
        int prediction = (int) result.get("prediction");
        double probability = (double) result.get("probability");
        t.setIsFraud(prediction == 1);
        t.setFraudProbability(probability);
        return transactionRepository.save(t);
    }

    @GetMapping
    public List<Transaction> getAll() {
        return transactionRepository.findAll();
    }
}