package com.geekykel.repository;

import com.geekykel.model.Task;
import com.geekykel.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByCompletedOrderByCreatedAtDesc(boolean completed);

    List<Task> findByUserId(Long id);

    List<Task> findByOrderByCreatedAtDesc();

//    @Query(value = "UPDATE task SET completed = ?1 where id = ?2", nativeQuery = true)
//    void updateTask(boolean status, long id);

}
