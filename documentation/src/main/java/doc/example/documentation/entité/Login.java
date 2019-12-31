package doc.example.documentation.entité;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Login  {
    @Id
    @GeneratedValue
    long idl;
    String email;
    String password;

    public Login() {
    }

    public Login(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public long getIdl() {
        return idl;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setIdl(long idl) {
        this.idl = idl;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
