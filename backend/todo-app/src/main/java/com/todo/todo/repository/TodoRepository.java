package com.todo.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.todo.todo.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer>{
    
    List<Todo> findByUsername(String username);

}