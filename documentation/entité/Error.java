package doc.example.documentation.entité;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Error {
    @Id
    Long idError;
    String nomFichier;
    @Temporal(TemporalType.DATE)
    Date dateMise;
    String Modificateur;
    @ManyToOne
    private User users;

    public Error() {
    }

    public Error(Long idError, String nomFichier, Date dateMise, String modificateur) {
        this.idError = idError;
        this.nomFichier = nomFichier;
        this.dateMise = dateMise;
        Modificateur = modificateur;
    }

    public Long getIdError() {
        return idError;
    }

    public void setIdError(Long idError) {
        this.idError = idError;
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
