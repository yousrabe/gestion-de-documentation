package doc.example.documentation.DAO;

import doc.example.documentation.entité.Mysql;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Imysql extends JpaRepository<Mysql,Long> {
}
