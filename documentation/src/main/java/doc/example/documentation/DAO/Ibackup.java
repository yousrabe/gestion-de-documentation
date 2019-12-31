package doc.example.documentation.DAO;

import doc.example.documentation.entité.Backup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Ibackup extends JpaRepository<Backup,Long> {
}
