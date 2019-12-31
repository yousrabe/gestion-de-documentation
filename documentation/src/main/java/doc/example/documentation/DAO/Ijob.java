package doc.example.documentation.DAO;


import doc.example.documentation.entité.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Ijob extends JpaRepository<Job,Long> {
}
