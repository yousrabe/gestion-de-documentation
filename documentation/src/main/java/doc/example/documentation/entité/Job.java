package doc.example.documentation.entité;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Job {
    @Id
    @GeneratedValue
    Long idJob;
    String nomFichier;
    @Temporal(TemporalType.DATE)
    Date dateMise;
    String Modificateur;
    @ManyToOne
    private User users;

    public Job() {
    }

    public Job(Long idJob, String nomFichier, Date dateMise, String modificateur) {
        this.idJob = idJob;
        this.nomFichier = nomFichier;
        this.dateMise = dateMise;
        Modificateur = modificateur;
    }

    public Long getidJob() {
        return idJob;
    }

    public void setidJob(Long idJob) {
        this.idJob = idJob;
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
