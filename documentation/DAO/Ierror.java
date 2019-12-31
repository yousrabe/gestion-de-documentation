package doc.example.documentation.DAO;

import doc.example.documentation.entité.Error;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Ierror extends JpaRepository<Error,Long> {
}
