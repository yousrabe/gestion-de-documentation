package doc.example.documentation.entité;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Monitoring {
    @Id
    Long idMoni;
    String nomFichier;
    @Temporal(TemporalType.DATE)
    Date dateMise;
    String Modificateur;
    @ManyToOne
    private User users;

    public Monitoring() {
    }

    public Monitoring(Long idMoni, String nomFichier, Date dateMise, String modificateur) {
        this.idMoni = idMoni;
        this.nomFichier = nomFichier;
        this.dateMise = dateMise;
        Modificateur = modificateur;
    }

    public Long getidMoni() {
        return idMoni;
    }

    public void setidMoni(Long idMoni) {
        this.idMoni = idMoni;
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
