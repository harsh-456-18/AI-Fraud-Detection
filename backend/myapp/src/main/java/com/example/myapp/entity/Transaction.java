package com.example.myapp.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double amount;
    private String category;
    private String description;
    private String location;
    private String deviceType;
    private LocalDateTime transactionTime;

    private Boolean isFraud = false;
    private Double fraudProbability = 0.0;

    // ===== GETTERS & SETTERS =====

    public Long getId() {
        return id;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getIsFraud() {
        return isFraud;
    }

    public void setIsFraud(Boolean isFraud) {
        this.isFraud = isFraud;
    }

    public Double getFraudProbability() {
        return fraudProbability;
    }
    public String getDeviceType() {
    return deviceType;
}

public void setDeviceType(String deviceType) {
    this.deviceType = deviceType;
}

public LocalDateTime getTransactionTime() {
    return transactionTime;
}

public void setTransactionTime(LocalDateTime transactionTime) {
    this.transactionTime = transactionTime;
}

public String getLocation() {
    return location;
}

public void setLocation(String location) {
    this.location = location;
}

    public void setFraudProbability(Double fraudProbability) {
        this.fraudProbability = fraudProbability;
    }
}