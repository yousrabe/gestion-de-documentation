package doc.example.documentation.DAO;

import doc.example.documentation.entité.Change;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Ichange extends JpaRepository<Change,Long> {
}
