package doc.example.documentation.entité;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Change {
    @Id
    Long idChange;
    String nomFichier;
    @Temporal(TemporalType.DATE)
    Date dateMise;
    String Modificateur;
    @ManyToOne
    private User users;

    public Change() {
    }

    public Change(Long idChange, String nomFichier, Date dateMise, String modificateur) {
        this.idChange = idChange;
        this.nomFichier = nomFichier;
        this.dateMise = dateMise;
        Modificateur = modificateur;
    }

    public Long getIdChange() {
        return idChange;
    }

    public void setIdChange(Long idChange) {
        this.idChange = idChange;
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
