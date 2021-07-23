
const Patches = require('Patches')
const FaceTracking = require('FaceTracking')
const R = require('Reactive')
const face = FaceTracking.face(0)
const ft = require('FaceTracking2D')
const Screen = require('./Screen')
// const {log} = require('Diagnostics')

;(async function() {

    // const feature = face.cameraTransform.applyToPoint(face.nose.tip.add(R.vector(0,.02, 0)))
    const feature = face.cameraTransform.applyToPoint(face.mouth.upperLipCenter)
    const pos = await Screen.cameraTransformToPercent(feature)
    Patches.inputs.setPoint2D('mouthCenter', R.point2d(pos.x, pos.y))

    // Patches.inputs.setScalar('faceCenterX', nosePos.x)
    // Patches.inputs.setScalar('faceCenterY', nosePos.y)

    // const center = ft.face(0).boundingBox.center
    // Patches.inputs.setScalar('faceCenterXb', center.x)
    // Patches.inputs.setScalar('faceCenterYb', center.y)

})();
