package doc.example.documentation.DAO;
import doc.example.documentation.entité.Docu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Idoc extends JpaRepository<Docu,Long> {


}
