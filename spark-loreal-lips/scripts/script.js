const Patches = require('Patches');
const Reactive = require('Reactive');
const FaceTracking2D = require('FaceTracking2D');

const face2D = FaceTracking2D.face(0);
const face2DBounds = face2D.boundingBox;
const face2DBoundsCenter = face2DBounds.center;

Patches.inputs.setPoint2D("position2d", Reactive.point2d(face2DBoundsCenter.x, face2DBoundsCenter.y));

