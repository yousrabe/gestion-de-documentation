package doc.example.documentation.entité;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
public class Document implements Serializable {
    @Id
    Long idDocu;
    String nomFichier;
   // @JsonFormat(pattern="yyyy-MM-dd")
    String dateMise;
    String modificateur;
   // @ManyToOne
   // private User users;


    public Document() {
    }

    public Document(Long idDocu, String nomFichier, String dateMise, String modificateur) {
        this.idDocu = idDocu;
        this.nomFichier = nomFichier;
        this.dateMise = dateMise;
        this.modificateur = modificateur;
    }

    public Long getIdDocu() {
        return idDocu;
    }

    public void setIdDocu(Long idDocu) {
        this.idDocu = idDocu;
    }

    public String getNomFichier() {
        return nomFichier;
    }

    public void setNomFichier(String nomFichier) {
        this.nomFichier = nomFichier;
    }

    public String getDateMise() {
        return dateMise;
    }

    public void setDateMise(String dateMise) {
        this.dateMise = dateMise;
    }

    public String getModificateur() {
        return modificateur;
    }

    public void setModificateur(String modificateur) {
        this.modificateur = modificateur;
    }

}
