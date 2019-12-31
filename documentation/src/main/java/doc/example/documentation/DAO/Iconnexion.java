package doc.example.documentation.DAO;


import doc.example.documentation.entité.Connexion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Iconnexion extends JpaRepository<Connexion,Long> {

}
