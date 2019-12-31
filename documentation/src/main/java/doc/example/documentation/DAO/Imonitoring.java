package doc.example.documentation.DAO;

import doc.example.documentation.entité.Monitoring;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Imonitoring extends JpaRepository<Monitoring,Long> {
}
