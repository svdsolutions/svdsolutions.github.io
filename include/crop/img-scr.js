function initializeCropper(inputElement, previewContainerId, cropButtonId, widthInputId, heightInputId, dpiInputId, formatSelectId, defaultWidth, defaultHeight, defaultDPI) {
    var previewContainer = document.getElementById(previewContainerId);
    var cropButton = document.getElementById(cropButtonId);
    var widthInput = document.getElementById(widthInputId);
    var heightInput = document.getElementById(heightInputId);
    var dpiInput = document.getElementById(dpiInputId);
    var formatSelect = document.getElementById(formatSelectId);
    var image = new Image();
    var cropper;

    inputElement.addEventListener('change', function(event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function(event) {
            image.src = event.target.result;
            image.onload = function() {
                if (cropper) {
                    cropper.destroy();
                }

                previewContainer.innerHTML = '';

                var img = document.createElement('img');
                img.src = image.src;
                img.id = 'croppedImage';
                previewContainer.appendChild(img);

                cropper = new Cropper(img, {
                    aspectRatio: widthInput.value / heightInput.value,
                    viewMode: 1,
                    movable: false,
                    zoomable: false,
                    rotatable: false,
                    scalable: false,
                });

                cropButton.disabled = false;
            };
        };

        reader.readAsDataURL(file);
    });

    cropButton.addEventListener('click', function() {
        var requiredWidth = parseInt(widthInput.value);
        var requiredHeight = parseInt(heightInput.value);
        var requiredDPI = parseInt(dpiInput.value);
        var croppedCanvas = cropper.getCroppedCanvas({ width: requiredWidth, height: requiredHeight });

        // Calculate the scaling factor for DPI
        var scalingFactor = requiredDPI / 96; // Assuming a default screen DPI of 96

        // Create a new image element for the cropped image
        var croppedImage = new Image();
        croppedImage.src = croppedCanvas.toDataURL(`image/${formatSelect.value}`, scalingFactor);
        croppedImage.className = 'img-fluid rounded';

        // Create a download button for the cropped image
        var downloadButton = document.querySelector('.downloadimagebutton');
        downloadButton.href = croppedImage.src;
        downloadButton.download = `cropped_image.${formatSelect.value}`;

        // Display the cropped image and download button
        previewContainer.innerHTML = '';
        previewContainer.appendChild(croppedImage);
    });
}

// Initialize image cropper
var imageInput = document.getElementById('imageInput');
var imagePreviewContainer = document.getElementById('imagePreviewContainer');
var cropImageButton = document.getElementById('cropImageButton');
var imageWidthInput = document.getElementById('imageWidth');
var imageHeightInput = document.getElementById('imageHeight');
var imageDPIInput = document.getElementById('imageDPI');
var imageFormatSelect = document.getElementById('imageFormat');
initializeCropper(imageInput, 'imagePreviewContainer', 'cropImageButton', 'imageWidth', 'imageHeight', 'imageDPI', 'imageFormat', imageWidthInput.value, imageHeightInput.value, imageDPIInput.value);
