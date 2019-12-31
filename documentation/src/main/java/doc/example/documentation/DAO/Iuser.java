package doc.example.documentation.DAO;

import doc.example.documentation.entité.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Iuser extends JpaRepository<User,Long> {

    User findByEmail(String email);
  // User findByConfirmationToken(String confirmationToken);
//public void existsUserByEmailAndPassword(String email,String password);

}
