'use client'
import Button from '@mui/material/Button';


export default function SubmitButton() {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Submit
    </Button>
  );
}