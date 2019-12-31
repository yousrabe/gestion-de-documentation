package doc.example.documentation.entité;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.io.File;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Docu implements Serializable {
    @Id
    @GeneratedValue
    Long   idD;
    File nomF;
    Date dateM;
    String modifi;
    @ManyToOne
    User users;




    public Docu() {}

    public Docu(File nomF, Date dateM, String modifi) {
        this.nomF = nomF;
        this.dateM = dateM;
        this.modifi = modifi;
    }

    public Long getIdD() {
        return idD;
    }

    public void setIdD(Long idD) {
        this.idD = idD;
    }

    public File getNomF() {
        return nomF;
    }

    public void setNomF(File nomF) {
        this.nomF = nomF;
    }

    public Date getDateM() {
        return dateM;
    }

    public void setDateM(Date dateM) {
        this.dateM = dateM;
    }

    public String getModifi() {
        return modifi;
    }

    public void setModifi(String modifi) {
        this.modifi = modifi;
    }
}
