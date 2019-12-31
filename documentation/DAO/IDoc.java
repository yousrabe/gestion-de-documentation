package doc.example.documentation.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDoc extends JpaRepository <Document,Long> {
}
