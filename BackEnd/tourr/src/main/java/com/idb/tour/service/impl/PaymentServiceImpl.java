package com.idb.tour.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.idb.tour.model.Payment;
import com.idb.tour.repository.PaymentRepository;
import com.idb.tour.service.PaymentService;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Override
    public Payment getPaymentById(Long id) {
        Optional<Payment> payment = paymentRepository.findById(id);
        return payment.orElse(null);
    }

    @Override
    public List<Payment> getAllPayments() {
       List<Payment> payments = paymentRepository.findAll();
        payments.forEach(p -> {
            p.setBooking(null); 
        });
        return payments;
    }

    @Override
    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    @Override
    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }
}

