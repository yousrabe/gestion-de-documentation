package doc.example.documentation.entité;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Connexion {

    @Id
    @GeneratedValue
    Long idConn;
    String nomFichier;
    @Temporal(TemporalType.DATE)
    Date dateMise;
    String Modificateur;
    @ManyToOne
    private User users;

    public Connexion() {
    }

    public Connexion(Long idConn, String nomFichier, Date dateMise, String modificateur) {
        this.idConn = idConn;
        this.nomFichier = nomFichier;
        this.dateMise = dateMise;
        Modificateur = modificateur;
    }

    public Long getIdConn() {
        return idConn;
    }

    public void setIdConn(Long idConn) {
        this.idConn = idConn;
    }

    public String getNomFichier() {
        return nomFichier;
    }

    public void setNomFichier(String nomFichier) {
        this.nomFichier = nomFichier;
    }

    public Date getDateMise() {
        return dateMise;
    }

    public void setDateMise(Date dateMise) {
        this.dateMise = dateMise;
    }

    public String getModificateur() {
        return Modificateur;
    }

    public void setModificateur(String modificateur) {
        Modificateur = modificateur;
    }
}
