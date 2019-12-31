package doc.example.documentation.entité;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Performance {
    @Id
    Long idPerfo;
    String nomFichier;
    @Temporal(TemporalType.DATE)
    Date dateMise;
    String Modificateur;
    @ManyToOne
    private User users;

    public Performance() {
    }

    public Long getididPerfo() {
        return idPerfo;
    }

    public void setididPerfo(Long idPerfo) {
        this.idPerfo= idPerfo;
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
