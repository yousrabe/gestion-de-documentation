package doc.example.documentation.entité;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue
    private Long idUser;
    private String lastName;
    private String firstName;
    private String username;
    private String email;
    private String password;
    @OneToMany(mappedBy = "users")
  private List<Docu> users;


    public User() {
    }

    public User(String lastName, String firstName, String username, String email, String password) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
