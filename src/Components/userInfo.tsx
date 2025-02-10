import { useForm, Controller } from "react-hook-form";
import PdfGenerator from "./PdfGenerator";
import { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  Paper,
} from "@mui/material";

type GeneralInfo = {
  firstname: string;
  lastname: string;
  age?: number;
  email?: string;
};

type Education = {
  schoolName: string;
  collegeName: string;
  yearOfPassout: number;
};

type PracticalExperience = {
  workExperience: number;
  companyName: string;
  dateFrom: string;
  dateTo: string;
  practicalExperience: string;
};

type FormData = {
  generalInfo: GeneralInfo;
  education: Education;
  practicalExperience: PracticalExperience;
};

const UserForm = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setFormData(data); // Pass the form data to the state for PdfGenerator
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          User Information Form
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {/* General Info */}
            <Grid item xs={12}>
              <Typography variant="h6">General Info</Typography>
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="First Name"
                fullWidth
                {...register("generalInfo.firstname", {
                  required: "First name is required",
                })}
                error={!!errors.generalInfo?.firstname}
                helperText={errors.generalInfo?.firstname?.message}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Last Name"
                fullWidth
                {...register("generalInfo.lastname", {
                  required: "Last name is required",
                })}
                error={!!errors.generalInfo?.lastname}
                helperText={errors.generalInfo?.lastname?.message}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Age"
                type="number"
                fullWidth
                {...register("generalInfo.age")}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                {...register("generalInfo.email")}
              />
            </Grid>

            {/* Education */}
            <Grid item xs={12}>
              <Typography variant="h6">Education</Typography>
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="School Name"
                fullWidth
                {...register("education.schoolName", {
                  required: "School name is required",
                })}
                error={!!errors.education?.schoolName}
                helperText={errors.education?.schoolName?.message}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="College Name"
                fullWidth
                {...register("education.collegeName", {
                  required: "College name is required",
                })}
                error={!!errors.education?.collegeName}
                helperText={errors.education?.collegeName?.message}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Year of Passout"
                type="number"
                fullWidth
                {...register("education.yearOfPassout", {
                  required: "Year of passout is required",
                })}
                error={!!errors.education?.yearOfPassout}
                helperText={errors.education?.yearOfPassout?.message}
              />
            </Grid>

            {/* Practical Experience */}
            <Grid item xs={12}>
              <Typography variant="h6">Practical Experience</Typography>
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Work Experience (Years)"
                type="number"
                fullWidth
                {...register("practicalExperience.workExperience", {
                  required: "Work experience is required",
                })}
                error={!!errors.practicalExperience?.workExperience}
                helperText={errors.practicalExperience?.workExperience?.message}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Company Name"
                fullWidth
                {...register("practicalExperience.companyName", {
                  required: "Company name is required",
                })}
                error={!!errors.practicalExperience?.companyName}
                helperText={errors.practicalExperience?.companyName?.message}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="practicalExperience.dateFrom"
                control={control}
                defaultValue=""
                rules={{ required: "Start date is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Date From"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.practicalExperience?.dateFrom}
                    helperText={errors.practicalExperience?.dateFrom?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="practicalExperience.dateTo"
                control={control}
                defaultValue=""
                rules={{ required: "End date is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Date To"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.practicalExperience?.dateTo}
                    helperText={errors.practicalExperience?.dateTo?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Practical Experience Description"
                multiline
                rows={4}
                fullWidth
                {...register("practicalExperience.practicalExperience")}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Render PdfGenerator if formData exists */}
        {formData && <PdfGenerator data={formData} />}
      </Paper>
    </Container>
  );
};

export default UserForm;
