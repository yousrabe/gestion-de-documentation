package doc.example.documentation.entité;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Disk {
    @Id
    Long idDisk;
    String nomFichier;
    @Temporal(TemporalType.DATE)
    Date dateMise;
    String Modificateur;
    @ManyToOne
    private User users;

    public Disk() {
    }

    public Disk(Long idDisk, String nomFichier, Date dateMise, String modificateur) {
        this.idDisk = idDisk;
        this.nomFichier = nomFichier;
        this.dateMise = dateMise;
        Modificateur = modificateur;
    }

    public Long getIdDocu() {
        return idDisk;
    }

    public void setIdDocu(Long idDisk) {
        this.idDisk = idDisk;
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
