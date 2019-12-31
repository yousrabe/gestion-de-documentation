package doc.example.documentation.DAO;


import doc.example.documentation.entité.Performance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Iperformance extends JpaRepository<Performance,Long> {
}

