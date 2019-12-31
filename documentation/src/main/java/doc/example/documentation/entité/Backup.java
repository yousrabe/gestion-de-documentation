package doc.example.documentation.entité;

import javax.persistence.*;
import java.util.Date;
@Entity
public class Backup {
    @Id
    @GeneratedValue
    Long idBackup;
    String nomFichier;
    @Temporal(TemporalType.DATE)
    Date dateMise;
    String modificateur;
  //@ManyToOne
   // private User users;

    public Backup() {
    }

    public Backup(Long idBackup, String nomFichier, Date dateMise, String modificateur) {
        this.idBackup = idBackup;
        this.nomFichier = nomFichier;
        this.dateMise = dateMise;
        modificateur = modificateur;
    }

    public Long getIdBackup() {
        return idBackup;
    }

    public void setIdBackup(Long idBackup) {
        this.idBackup = idBackup;
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
        return modificateur;
    }

    public void setModificateur(String modificateur) {
        this.modificateur = modificateur;
    }
}
