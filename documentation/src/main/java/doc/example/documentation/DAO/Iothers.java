package doc.example.documentation.DAO;


import doc.example.documentation.entité.Others;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Iothers extends JpaRepository<Others,Long> {
}
