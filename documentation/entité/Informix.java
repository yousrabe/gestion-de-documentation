package doc.example.documentation.entité;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Informix {
    @Id
    Long idInfo;
    String nomFichier;
    @Temporal(TemporalType.DATE)
    Date dateMise;
    String Modificateur;
    @ManyToOne
    private User users;


    public Informix() {
    }

    public Informix(Long idInfo, String nomFichier, Date dateMise, String modificateur) {
        this.idInfo = idInfo;
        this.nomFichier = nomFichier;
        this.dateMise = dateMise;
        Modificateur = modificateur;
    }

    public Long getidInfo() {
        return idInfo;
    }

    public void setidInfo(Long idInfo) {
        this.idInfo = idInfo;
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
