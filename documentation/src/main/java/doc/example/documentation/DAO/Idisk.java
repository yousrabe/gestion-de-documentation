package doc.example.documentation.DAO;



import doc.example.documentation.entité.Disk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Idisk extends JpaRepository<Disk,Long> {
}
