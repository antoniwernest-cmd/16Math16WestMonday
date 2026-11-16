/* The assessment menu opens the November 13 Patterning Assessments. */
window.ML_ASSESSMENT_SECTION={open(){window.ML_APP?.save();document.getElementById('stopVoice')?.click();document.getElementById('grownUpMenu')?.hidePopover();location.assign(new URL('Patterning-Assessments-Nov-13/index.html',location.href).href)}};
