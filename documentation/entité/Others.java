package doc.example.documentation.entité;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Others {
    @Id
    Long idOthers;
    String nomFichier;
    @Temporal(TemporalType.DATE)
    Date dateMise;
    String Modificateur;
    @ManyToOne
    private User users;

    public Others() {
    }

    public Others(Long idOthers, String nomFichier, Date dateMise, String modificateur) {
        this.idOthers= idOthers;
        this.nomFichier = nomFichier;
        this.dateMise = dateMise;
        Modificateur = modificateur;
    }

    public Long getidOthers() {
        return idOthers;
    }

    public void setidOthers(Long idOthers) {
        this.idOthers= idOthers;
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
