package doc.example.documentation.DAO;

import doc.example.documentation.entité.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Iuser extends JpaRepository<User,Long> {
   /* @Query("select u from user u where u.email = :email")
    public String findByEmail(@Param("email") String email);

    @Query("select u from user u where u.password = :password")
    public String findBypassword(@Param("password") String password);*/
}
