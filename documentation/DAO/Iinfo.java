package doc.example.documentation.DAO;

import doc.example.documentation.entité.Backup;
import doc.example.documentation.entité.Informix;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Iinfo extends JpaRepository<Informix,Long> {
}

