package com.idb.tour.service.impl;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.idb.tour.model.Booking;
import com.idb.tour.repository.BookingRepository;
import com.idb.tour.service.BookingService;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public Booking getBookingById(Long id) {
        Optional<Booking> booking = bookingRepository.findById(id);
        return booking.orElse(null);
    }

    @Override
    public List<Booking> getAllBookings() {
       List<Booking> bookings = bookingRepository.findAll();
       bookings.forEach(b -> {
           b.setTour(null);
           b.setUser(null);
       });
       return bookings;
    }

    @Override
    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    @Override
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}

